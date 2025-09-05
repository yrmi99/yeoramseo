// AboutContactForm.jsx (혹은 Contact 컴포넌트)
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "./firebase"; // 방금 만든 firebase.js

const db = getFirestore(app); // Firestore 인스턴스 생성

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    name: e.target.Name.value,
    email: e.target.Email.value,
    message: e.target.Message.value,
    createdAt: new Date(), // 제출 시간
  };

  try {
    // contacts 컬렉션에 새 도큐먼트 추가
    await addDoc(collection(db, "contacts"), data);
    alert("Message saved to database!");
    e.target.reset(); // 폼 초기화
  } catch (err) {
    console.error("Error saving message:", err);
    alert("Failed to save message.");
  }
};
