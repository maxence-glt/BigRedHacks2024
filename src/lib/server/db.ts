import { MongodbAdapter } from '@lucia-auth/adapter-mongodb';
import mongoose from 'mongoose';
import { MONGO_URI } from '$env/static/private';

await mongoose.connect(MONGO_URI);

export const Offering =
	mongoose.models.Offering ||
	mongoose.model(
		'Offering',
		new mongoose.Schema(
			{
				_id: {
					type: String,
					required: true
				},
				owner_id: {
					type: String,
					required: true
				},
				borrower_id: {
					type: String
				},
				price: {
					type: Number,
					required: true
				},
				borrow_time_limit: {
					type: Number
				},
				rating: {
					type: Number
				},
				created_at: {
					type: Date,
					required: true
				}
			} as const,
			{ _id: false }
		)
	);

export const User =
	mongoose.models.User ||
	mongoose.model(
		'User',
		new mongoose.Schema(
			{
				_id: {
					type: String,
					required: true
				},
				username: {
					type: String,
					required: true
				},
				github_id: {
					type: Number,
					required: true
				},
				offers: [
					{
						type: mongoose.Schema.Types.ObjectId,
						ref: 'Offering'
					}
				],
				borrows: [
					{
						type: mongoose.Schema.Types.ObjectId,
						ref: 'Offering'
					}
				]
			} as const,
			{ _id: false }
		)
	);

export const Session =
	mongoose.models.Session ||
	mongoose.model(
		'Session',
		new mongoose.Schema(
			{
				_id: {
					type: String,
					required: true
				},
				user_id: {
					type: String,
					required: true
				},
				expires_at: {
					type: Date,
					required: true
				}
			} as const,
			{ _id: false }
		)
	);

export const adapter = new MongodbAdapter(
	mongoose.connection.collection('sessions'),
	mongoose.connection.collection('users')
);
