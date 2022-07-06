import { Meta, Resource } from "fhir/r4";

export abstract class MyResource implements Resource {
    resourceType: string = 'Resource';
    id?: string | undefined;
    _id?: Element | undefined;
    implicitRules?: string | undefined;
    _implicitRules?: Element | undefined;
    language?: string | undefined;
    _language?: Element | undefined;
    meta?: Meta | undefined;

}