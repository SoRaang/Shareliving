// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyPage from './pages/MyPage';
import EditProfile from './pages/EditProfile';
import MessagesPage from './pages/MessagesPage';
import MessageDetail from './components/MessageDetail';
import ReplyMessage from './pages/ReplyMessage';
import NoticeList from './components/NoticeList';
import NoticeDetail from './components/NoticeDetail';
import ShareHistory from './pages/ShareHistory';
import ProductDetail from './pages/ProductDetail';
import KnowledgeDetail from './pages/KnowledgeDetail';

const App = () => {
  const [receivedMessages, setReceivedMessages] = useState([
    {
      id: 1,
      subject: '첫 번째 메시지',
      body: '안녕하세요! 첫 번째 메시지입니다.',
      sender: '사용자A',
    },
    {
      id: 2,
      subject: '두 번째 메시지',
      body: '안녕하세요! 두 번째 메시지입니다.',
      sender: '사용자B',
    },
  ]);

  const [sentMessages, setSentMessages] = useState([]);

  const handleSendReply = (originalMessageId, replyContent) => {
    const originalMessage = receivedMessages.find(
      (msg) => msg.id === Number(originalMessageId)
    );
    const newMessage = {
      id: sentMessages.length + 1 + receivedMessages.length,
      subject: `Re: ${originalMessage.subject}`,
      body: replyContent,
      sender: '현재 사용자',
    };

    setSentMessages([...sentMessages, newMessage]);
    console.log('답장 메시지가 상태에 추가되었습니다.');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyPage />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route
          path="/messages"
          element={
            <MessagesPage
              receivedMessages={receivedMessages}
              sentMessages={sentMessages}
            />
          }
        />
        <Route
          path="/messages/:messageId"
          element={
            <MessageDetail
              messages={receivedMessages}
              sentMessages={sentMessages}
            />
          }
        />
        <Route
          path="/messages/:messageId/reply"
          element={<ReplyMessage onSendReply={handleSendReply} />}
        />
        <Route path="/share-history" element={<ShareHistory />} />
        <Route path="/notices" element={<NoticeList />} />
        <Route path="/notices/:noticeId" element={<NoticeDetail />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/knowledge/:id" element={<KnowledgeDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
