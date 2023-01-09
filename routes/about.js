app.get("/about", (req, res) => {
  const developers = [
    {
      firstname: "Daniel",
      lastname: "Shkliar",
      id: "208494906",
      email: "daniel.shkliar@gmail.com",
    },
    {
      firstname: "Lior",
      lastname: "Silman",
      id: "315318261",
      email: "lior.silmansoad@gmail.com",
    },
  ];
  res.send(developers);
});
