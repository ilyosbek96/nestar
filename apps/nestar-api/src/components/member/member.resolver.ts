import { Mutation, Resolver, Query } from '@nestjs/graphql';
import { MemberService } from './member.service';

@Resolver()
export class MemberResolver {
	constructor(private readonly memberService: MemberService) {}

	/** --------------------------- signup --------------------------- **/
	@Mutation(() => String)
	public async signup(): Promise<string> {
		console.log('Mutation: signup');
		return this.memberService.signup();
	}

	/** --------------------------- login --------------------------- **/
	@Mutation(() => String)
	public async login(): Promise<string> {
		console.log('Mutation: login');
		return this.memberService.login();
	}

	/** --------------------------- updateMember --------------------------- **/
	@Mutation(() => String)
	public async updateMember(): Promise<string> {
		console.log('Mutation: updateMember');
		return this.memberService.updateMember();
	}

	/** --------------------------- getMember --------------------------- **/
	@Query(() => String)
	public async getMember(): Promise<string> {
		console.log('Mutation: getMember');
		return this.memberService.getMember();
	}
}
