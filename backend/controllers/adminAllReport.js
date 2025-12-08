const Incident = require('../models/Incident');

exports.getAllReports = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '', sort = 'newest' } = req.query;

    // Build the query
    const query = {};
    if (search) {
      query.title = { $regex: search, $options: 'i' }; // Case-insensitive search on the title
    }

    // Sorting logic
    const sortOptions = {
      newest: { created_at: -1 },
      oldest: { created_at: 1 },
      pending: { status: 1 },
      completed: { status: -1 },
    };

    const sortBy = sortOptions[sort] || sortOptions.newest;

    // Pagination
    const skip = (page - 1) * limit;

    // Fetch reports
    const reports = await Incident.find(query)
      .populate('reporter_id', 'fullName email') // Populate reporter details
      .populate('type_id', 'name') // Populate incident type
      .populate('assigned_engineer_id', 'fullName email') // Populate assigned team
      .sort(sortBy)
      .skip(skip)
      .limit(parseInt(limit));

    // Get total count for pagination
    const totalReports = await Incident.countDocuments(query);

    res.status(200).json({
      success: true,
      data: reports,
      totalPages: Math.ceil(totalReports / limit),
      currentPage: parseInt(page),
    });
  } catch (err) {
    console.error('Error fetching reports:', err);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch reports',
      error: err.message,
    });
  }
};