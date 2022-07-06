import { OperationOutcome, OperationOutcomeIssue } from "fhir/r4";
import { MyDomainResource } from "./domain_resource";

export class MyOperationOutcome extends MyDomainResource implements OperationOutcome {
    resourceType: 'OperationOutcome' = 'OperationOutcome';
    issue: OperationOutcomeIssue[] = [];
}