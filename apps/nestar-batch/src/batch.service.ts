import { Injectable } from '@nestjs/common';

@Injectable()
export class BatchService {
	/**------------------ batchRollback ----------------  */
	public async batchRollback(): Promise<void> {
		console.log('batchRollback');
	}

	/**------------------ batchProperties ----------------  */
	public async batchProperties(): Promise<void> {
		console.log('batchProperties');
	}

	/**------------------ batchAgents ----------------  */
	public async batchAgents(): Promise<void> {
		console.log('batchAgents');
	}

	/**------------------ getHello ----------------  */
	public getHello(): string {
		return 'Welcome to Nestar BATCH Server';
	}
}
