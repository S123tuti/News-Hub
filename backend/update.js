
app.put('/update-interests/:username', async (req, res) => {
    const { username } = req.params;
    const { selectedInterests } = req.body;
  
    try {
      await User.updateOne({ username }, { selectedInterests });
      res.status(200).json({ message: 'Interests updated successfully' });
    } catch (error) {
      console.error('Error updating interests', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  