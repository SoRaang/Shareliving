import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MessageDetail.scss'; // SCSS 파일 import

const MessageDetail = () => {
  const { messageId } = useParams();
  const sentMessagesString = localStorage.getItem('newSentMessages');
  const receivedMessagesString = localStorage.getItem('receivedMessages');
  const sentMessages = sentMessagesString ? JSON.parse(sentMessagesString) : [];
  const receivedMessages = receivedMessagesString
    ? JSON.parse(receivedMessagesString)
    : [];

  // 메시지 확인 로직 수정
  const sentMessage = sentMessages.find((msg) => msg._id === messageId);
  const receivedMessage = receivedMessages.find((msg) => msg._id === messageId);

  const currentMessage = sentMessage || receivedMessage;
  const isSentMessage = Boolean(sentMessage);
  const isReceivedMessage = Boolean(receivedMessage);

  // 이전 및 다음 메시지 구하기
  const previousMessage = isSentMessage
    ? sentMessages[
        sentMessages.findIndex((msg) => msg._id === messageId) - 1
      ] || null
    : isReceivedMessage
    ? receivedMessages[
        receivedMessages.findIndex((msg) => msg._id === messageId) - 1
      ] || null
    : null;

  const nextMessage = isSentMessage
    ? sentMessages[
        sentMessages.findIndex((msg) => msg._id === messageId) + 1
      ] || null
    : isReceivedMessage
    ? receivedMessages[
        receivedMessages.findIndex((msg) => msg._id === messageId) + 1
      ] || null
    : null;

  return (
    <div className="message-detail">
      <h2>메시지 상세 내용</h2>
      {currentMessage ? (
        <div className="message-detail__content">
          <h3>{isSentMessage ? `보낸 메시지` : `받은 메시지`}</h3>
          <p>{currentMessage.message}</p>
          <p>
            {isSentMessage
              ? `받는 사람: ${currentMessage.receiver.email}`
              : `보낸 사람: ${currentMessage.sender.email}`}
          </p>
          <p>
            전송 날짜: {new Date(currentMessage.createdAt).toLocaleString()}
          </p>
          <div className="message-detail__navigation">
            {previousMessage && (
              <Link
                to={`/messages/${isSentMessage ? 'sent' : 'received'}/${
                  previousMessage._id
                }`}
                className="message-detail__link"
              >
                이전 메시지
              </Link>
            )}
            {nextMessage && (
              <Link
                to={`/messages/${isSentMessage ? 'sent' : 'received'}/${
                  nextMessage._id
                }`}
                className="message-detail__link"
              >
                다음 메시지
              </Link>
            )}
          </div>
          {isReceivedMessage && (
            <Link to={`/messages/received/${messageId}/reply`}>
              <button className="message-detail__reply-button">
                답장 작성
              </button>
            </Link>
          )}
        </div>
      ) : (
        <p>메시지를 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

export default MessageDetail;
