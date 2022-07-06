import { DomainResource, Extension, FhirResource, Narrative } from "fhir/r4";
import { MyResource } from "./resource";

export abstract class MyDomainResource extends MyResource implements DomainResource {
    contained?: FhirResource[] | undefined;
    extension?: Extension[] | undefined;
    modifierExtension?: Extension[] | undefined;
    text?: Narrative | undefined;
}
