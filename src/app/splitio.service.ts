import { Injectable } from '@angular/core';
import { SplitFactory } from '@splitsoftware/splitio-browserjs';
import { fromEvent, Subscription } from 'rxjs';

@Injectable()
export class SplitIoService {

    splitio: SplitIO.ISDK;
    splitClient: SplitIO.IClient;
    isReady = false;
    treatments: SplitIO.Treatments;
    subscription: Subscription;
    features: string[] = [
        'include_phone'
    ];


    isTreatmentOn(treatmentName: string) : boolean {
      let treatment = this.splitClient.getTreatment(treatmentName);
      let result = null;
  
      if (treatment == 'on') {
        result = true;
      } else if (treatment == 'off') {
        result = false;
      } else {
        result = false;
      }

      console.log(`Value of: ${treatmentName} is ${treatment}`);
  
      return result;
    }

    initSdk(): void {
        this.splitio = SplitFactory({
            core: {
                authorizationKey: '<your api key>',
                key: 'customer-key'
            }
        });

        this.splitClient = this.splitio.client();
        this.verifyReady();
    }


    private verifyReady(): void {
        const isReadyEvent = fromEvent(this.splitClient, this.splitClient.Event.SDK_READY);

        this.subscription = isReadyEvent.subscribe({
            next() {
                this.isReady = true;
                console.log('Sdk ready: ', this.isReady);
            },
            error(err) {
                console.log('Sdk error: ', err);
                this.isReady = false;
            }
        });
    }

    getTreatments(): void {
        this.treatments = this.splitClient.getTreatments(this.features);
    }

}