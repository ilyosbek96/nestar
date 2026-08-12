import { Mutation, Resolver, Query } from '@nestjs/graphql';
import { MemberService } from './member.service';

@Resolver()
export class MemberResolver {
	constructor(private readonly memberService: MemberService) {}

	/** --------------------------- signup --------------------------- **/
	@Mutation(() => String) // @Mutation(POST)
	public async signup(): Promise<string> {
		console.log('Mutation: signup');
		return this.memberService.signup();
	}

	/** --------------------------- login --------------------------- **/
	@Mutation(() => String) // @Mutation(POST)
	public async login(): Promise<string> {
		console.log('Mutation: login');
		return this.memberService.login();
	}

	/** --------------------------- updateMember --------------------------- **/
	@Mutation(() => String) // @Mutation(POST)
	public async updateMember(): Promise<string> {
		console.log('Mutation: updateMember');
		return this.memberService.updateMember();
	}

	/** --------------------------- getMember --------------------------- **/
	@Query(() => String) // @Query (GET)
	public async getMember(): Promise<string> {
		console.log('Query: getMember');
		return this.memberService.getMember();
	}
}
