"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useChat } from "ai/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Pencil, Trash2, Check, XIcon as XMark } from "lucide-react";

interface ChatbotInterfaceProps {
  onClose: () => void;
  backgroundUrl?: string;
}

const ChatbotInterface = ({
  onClose,
  backgroundUrl,
}: ChatbotInterfaceProps) => {
  const { messages, input, handleInputChange, handleSubmit, setMessages } =
    useChat({
      api: "/api/chat",
    });
  const [mounted, setMounted] = useState(false);
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editInput, setEditInput] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to handle message deletion
  const handleDeleteMessage = (messageId: string) => {
    setMessages((prevMessages) =>
      prevMessages.filter((msg) => msg.id !== messageId)
    );
  };

  // Function to start editing
  const handleStartEdit = (messageId: string, content: string) => {
    setEditingMessageId(messageId);
    setEditInput(content);
  };

  // Function to save edit
  const handleSaveEdit = (messageId: string) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === messageId ? { ...msg, content: editInput } : msg
      )
    );
    setEditingMessageId(null);
  };

  // Function to cancel edit
  const handleCancelEdit = () => {
    setEditingMessageId(null);
    setEditInput("");
  };

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-5xl bg-[#0f1729]/90 rounded-xl shadow-2xl overflow-hidden">
        <div className="relative flex flex-col h-[80vh]">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <h2 className="text-xl font-semibold text-white">
              What do you have in mind?
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div className="group relative inline-block">
                  {editingMessageId === message.id ? (
                    <div className="flex items-start gap-2">
                      <div className="relative">
                        <Input
                          value={editInput}
                          onChange={(e) => setEditInput(e.target.value)}
                          className="min-w-[300px] bg-gray-800/80 border-gray-700 text-white pr-16"
                          autoFocus
                        />
                        <div className="absolute right-1 top-1 flex gap-1">
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => handleSaveEdit(message.id)}
                            className="h-6 w-6 text-green-500 hover:text-green-400"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={handleCancelEdit}
                            className="h-6 w-6 text-red-500 hover:text-red-400"
                          >
                            <XMark className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div
                        className={`relative rounded-lg px-4 py-2 ${
                          message.role === "user"
                            ? "bg-gray-700/80 text-white"
                            : "bg-gray-800/80 text-gray-100"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap leading-relaxed pr-14">
                          {message.content}
                        </p>

                        {/* Action buttons */}
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() =>
                              handleStartEdit(message.id, message.content)
                            }
                            className="h-6 w-6 text-gray-400 hover:text-white"
                          >
                            <Pencil className="h-3 w-3" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => handleDeleteMessage(message.id)}
                            className="h-6 w-6 text-gray-400 hover:text-white hover:bg-red-500/20"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Input form */}
          <form
            onSubmit={handleSubmit}
            className="p-4 border-t border-gray-800 bg-gray-900/50"
          >
            <div className="flex gap-2 max-w-4xl mx-auto">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-grow bg-gray-800/80 border-gray-700 text-white placeholder-gray-400"
              />
              <Button
                type="submit"
                className="bg-gray-700/80 hover:bg-gray-600/80 text-white px-6"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatbotInterface;