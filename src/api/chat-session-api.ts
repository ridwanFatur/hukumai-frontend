import axiosClient from "@/utils/axios"
import { ENDPOINT } from "@/utils/api-constants"
import type { ChatSession } from "@/models/ChatSession";

export const getChatSessionsApi = async (title?: string): Promise<ChatSession[]> => {
	const response = await axiosClient.get(`${ENDPOINT.chat_session}/`, {
		params: { title }
	}).then((res) => res.data);

	return response;
}