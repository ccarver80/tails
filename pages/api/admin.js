import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "POST") {
    const post = await prisma.post.create({
      data: {
        title: req.body.Title,
        content: req.body.Description,
      },
    });

    res.status(201).json({ message: "posted sucsesfully" });
  } else {
    const data = await prisma.post.findMany();
    res.status(200).json(data);
  }
};
