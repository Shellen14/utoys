import React from "react";
import { useParams } from "react-router-dom";

const GalleryDetail = () => {
  const { id } = useParams();
  const items = [
    {
      id: 1,
      imageUrl:
        "https://i.pinimg.com/736x/ed/22/1e/ed221e92254431b5b48972e0c017803f.jpg",
      name: "Calvin Renaldo",
      title: "Canvas of Chaos",
      category: "Category",
      description: "An abstract depiction of chaos in a canvas.",
    },
    {
      id: 2,
      imageUrl:
        "https://i.pinimg.com/474x/fe/f7/f4/fef7f4a9f23c741245d82625a33ae103.jpg",
      name: "Dzaky Chesta",
      title: "Monochrome Lament",
      category: "Category",
      description: "A somber tone captured in black and white.",
    },
    {
      id: 3,
      imageUrl:
        "https://i.pinimg.com/236x/19/42/fe/1942fe4fc33d98082a96cefb0c3422b5.jpg",
      name: "Shellen Putri",
      title: "Chromatic Echo",
      category: "Category",
      description: "A vivid exploration of chromatic harmony.",
    },
  ];

  const item = items.find((item) => item.id === Number(id));

  if (!item) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Item Not Found</h1>
        <p>The item you're looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>{item.title}</h1>
      <img
        src={item.imageUrl}
        alt={item.title}
        style={{ width: "300px", display: "block", margin: "20px auto" }}
      />
      <p>
        <strong>Name:</strong> {item.name}
      </p>
      <p>
        <strong>Category:</strong> {item.category}
      </p>
      <p>
        <strong>Description:</strong> {item.description}
      </p>
    </div>
  );
};

export default GalleryDetail;
