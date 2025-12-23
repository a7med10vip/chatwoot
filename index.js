export default function handler(req, res) {
  console.log("Received from Chatwoot:", req.body);
  res.status(200).send("OK");
}
