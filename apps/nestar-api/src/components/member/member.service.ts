import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Member } from '../../libs/dto/member/member';
import { MemberInput } from '../../libs/dto/member/member.input';

@Injectable()
export class MemberService {
	/** --------------------------- mongoose --------------------------- **/
	constructor(@InjectModel('Member') private readonly memberModel: Model<Member>) {}
	/** --------------------------- signup --------------------------- **/
	public async signup(input: MemberInput): Promise<Member> {
		// TODO: Hash password

		try {
			const result = await this.memberModel.create(input);
			// TODO: Authentication via TOKEN
			return result;
		} catch (err) {
			console.log('Error, Service.model:', err);
			throw new BadRequestException(err);
		}
	}

	/** --------------------------- login --------------------------- **/
	public async login(): Promise<string> {
		return 'login executed';
	}

	/** --------------------------- updateMember --------------------------- **/
	public async updateMember(): Promise<string> {
		return 'updateMember executed';
	}

	/** --------------------------- getMember --------------------------- **/
	public async getMember(): Promise<string> {
		return 'getMember executed';
	}
}
