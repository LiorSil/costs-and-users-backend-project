app.get('/about/', (req, res) => {
  const developers = [
    {
      firstname: "Daniel",
      lastname: "Shkliar",
      id: "208494906",
      email: "daniel.shkliar@gmail.com"
    },
    {
      firstname: "Lior",
      lastname: "Silman",
      id: "789012",
      email: "jane.doe@example.com"
    }
  ];
  res.send(developers);
});
