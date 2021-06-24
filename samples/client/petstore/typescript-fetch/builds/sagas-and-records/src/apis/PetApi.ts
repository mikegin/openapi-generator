/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Category,
    CategoryFromJSON,
    CategoryToJSON,
    FindPetsByStatusResponse,
    FindPetsByStatusResponseFromJSON,
    FindPetsByStatusResponseToJSON,
    FindPetsByUserResponse,
    FindPetsByUserResponseFromJSON,
    FindPetsByUserResponseToJSON,
    ModelApiResponse,
    ModelApiResponseFromJSON,
    ModelApiResponseToJSON,
    Pet,
    PetFromJSON,
    PetToJSON,
} from '../models';

export interface AddPetRequest {
    dummyCat: Category;
}

export interface DeletePetRequest {
    petId: number;
    apiKey?: string;
}

export interface FindPetsByIdsRequest {
    ids: Array<number>;
}

export interface FindPetsByStatusRequest {
    status: Array<FindPetsByStatusStatusEnum>;
}

export interface FindPetsByTagsRequest {
    tags: Array<string>;
}

export interface FindPetsByUserIdsRequest {
    ids: Array<number>;
}

export interface GetPetByIdRequest {
    petId: number;
}

export interface UpdatePetRequest {
    body: Pet;
}

export interface UpdatePetWithFormRequest {
    petId: number;
    name?: string;
    status?: string;
}

export interface UploadFileRequest {
    petId: number;
    additionalMetadata?: string;
    file?: Blob;
}

/**
 * 
 */
export class PetApi extends runtime.BaseAPI {

    /**
     * Add a new pet to the store
     */
    async addPetRaw(requestParameters: AddPetRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.dummyCat === null || requestParameters.dummyCat === undefined) {
            throw new runtime.RequiredError('dummyCat','Required parameter requestParameters.dummyCat was null or undefined when calling addPet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/pet`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CategoryToJSON(requestParameters.dummyCat),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Add a new pet to the store
     */
    async addPet(dummyCat: Category): Promise<void> {
        await this.addPetRaw({ dummyCat: dummyCat });
    }

    /**
     * Deletes a pet
     */
    async deletePetRaw(requestParameters: DeletePetRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.petId === null || requestParameters.petId === undefined) {
            throw new runtime.RequiredError('petId','Required parameter requestParameters.petId was null or undefined when calling deletePet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.apiKey !== undefined && requestParameters.apiKey !== null) {
            headerParameters['api_key'] = String(requestParameters.apiKey);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/pet/{petId}`.replace(`{${"petId"}}`, encodeURIComponent(String(requestParameters.petId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a pet
     */
    async deletePet(petId: number, apiKey?: string): Promise<void> {
        await this.deletePetRaw({ petId: petId, apiKey: apiKey });
    }

    /**
     * Multiple ids can be provided with comma separated strings.
     * Finds Pets by ids
     */
    async findPetsByIdsRaw(requestParameters: FindPetsByIdsRequest): Promise<runtime.ApiResponse<Array<Pet>>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling findPetsByIds.');
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters['ids'] = requestParameters.ids.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/pet/findByIds`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PetFromJSON));
    }

    /**
     * Multiple ids can be provided with comma separated strings.
     * Finds Pets by ids
     */
    async findPetsByIds(ids: Array<number>): Promise<Array<Pet>> {
        const response = await this.findPetsByIdsRaw({ ids: ids });
        return await response.value();
    }

    /**
     * Multiple status values can be provided with comma separated strings
     * Finds Pets by status
     */
    async findPetsByStatusRaw(requestParameters: FindPetsByStatusRequest): Promise<runtime.ApiResponse<FindPetsByStatusResponse>> {
        if (requestParameters.status === null || requestParameters.status === undefined) {
            throw new runtime.RequiredError('status','Required parameter requestParameters.status was null or undefined when calling findPetsByStatus.');
        }

        const queryParameters: any = {};

        if (requestParameters.status) {
            queryParameters['status'] = requestParameters.status.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/pet/findByStatus`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FindPetsByStatusResponseFromJSON(jsonValue));
    }

    /**
     * Multiple status values can be provided with comma separated strings
     * Finds Pets by status
     */
    async findPetsByStatus(status: Array<FindPetsByStatusStatusEnum>): Promise<FindPetsByStatusResponse> {
        const response = await this.findPetsByStatusRaw({ status: status });
        return await response.value();
    }

    /**
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * Finds Pets by tags
     */
    async findPetsByTagsRaw(requestParameters: FindPetsByTagsRequest): Promise<runtime.ApiResponse<Array<Pet>>> {
        if (requestParameters.tags === null || requestParameters.tags === undefined) {
            throw new runtime.RequiredError('tags','Required parameter requestParameters.tags was null or undefined when calling findPetsByTags.');
        }

        const queryParameters: any = {};

        if (requestParameters.tags) {
            queryParameters['tags'] = requestParameters.tags.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/pet/findByTags`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PetFromJSON));
    }

    /**
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * Finds Pets by tags
     */
    async findPetsByTags(tags: Array<string>): Promise<Array<Pet>> {
        const response = await this.findPetsByTagsRaw({ tags: tags });
        return await response.value();
    }

    /**
     * Multiple ids can be provided with comma separated strings.
     * Finds Pets by user ids
     */
    async findPetsByUserIdsRaw(requestParameters: FindPetsByUserIdsRequest): Promise<runtime.ApiResponse<FindPetsByUserResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling findPetsByUserIds.');
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters['ids'] = requestParameters.ids.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/pet/findByUserIds`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FindPetsByUserResponseFromJSON(jsonValue));
    }

    /**
     * Multiple ids can be provided with comma separated strings.
     * Finds Pets by user ids
     */
    async findPetsByUserIds(ids: Array<number>): Promise<FindPetsByUserResponse> {
        const response = await this.findPetsByUserIdsRaw({ ids: ids });
        return await response.value();
    }

    /**
     * Returns a single pet
     * Find pet by ID
     */
    async getPetByIdRaw(requestParameters: GetPetByIdRequest): Promise<runtime.ApiResponse<Pet>> {
        if (requestParameters.petId === null || requestParameters.petId === undefined) {
            throw new runtime.RequiredError('petId','Required parameter requestParameters.petId was null or undefined when calling getPetById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api_key"] = this.configuration.apiKey("api_key"); // api_key authentication
        }

        const response = await this.request({
            path: `/pet/{petId}`.replace(`{${"petId"}}`, encodeURIComponent(String(requestParameters.petId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PetFromJSON(jsonValue));
    }

    /**
     * Returns a single pet
     * Find pet by ID
     */
    async getPetById(petId: number): Promise<Pet> {
        const response = await this.getPetByIdRaw({ petId: petId });
        return await response.value();
    }

    /**
     * Update an existing pet
     */
    async updatePetRaw(requestParameters: UpdatePetRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updatePet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/pet`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PetToJSON(requestParameters.body),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update an existing pet
     */
    async updatePet(body: Pet): Promise<void> {
        await this.updatePetRaw({ body: body });
    }

    /**
     * Updates a pet in the store with form data
     */
    async updatePetWithFormRaw(requestParameters: UpdatePetWithFormRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.petId === null || requestParameters.petId === undefined) {
            throw new runtime.RequiredError('petId','Required parameter requestParameters.petId was null or undefined when calling updatePetWithForm.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const consumes: runtime.Consume[] = [
            { contentType: 'application/x-www-form-urlencoded' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.name !== undefined) {
            formParams.append('name', requestParameters.name as any);
        }

        if (requestParameters.status !== undefined) {
            formParams.append('status', requestParameters.status as any);
        }

        const response = await this.request({
            path: `/pet/{petId}`.replace(`{${"petId"}}`, encodeURIComponent(String(requestParameters.petId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates a pet in the store with form data
     */
    async updatePetWithForm(petId: number, name?: string, status?: string): Promise<void> {
        await this.updatePetWithFormRaw({ petId: petId, name: name, status: status });
    }

    /**
     * uploads an image
     */
    async uploadFileRaw(requestParameters: UploadFileRequest): Promise<runtime.ApiResponse<ModelApiResponse>> {
        if (requestParameters.petId === null || requestParameters.petId === undefined) {
            throw new runtime.RequiredError('petId','Required parameter requestParameters.petId was null or undefined when calling uploadFile.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.additionalMetadata !== undefined) {
            formParams.append('additionalMetadata', requestParameters.additionalMetadata as any);
        }

        if (requestParameters.file !== undefined) {
            formParams.append('file', requestParameters.file as any);
        }

        const response = await this.request({
            path: `/pet/{petId}/uploadImage`.replace(`{${"petId"}}`, encodeURIComponent(String(requestParameters.petId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelApiResponseFromJSON(jsonValue));
    }

    /**
     * uploads an image
     */
    async uploadFile(petId: number, additionalMetadata?: string, file?: Blob): Promise<ModelApiResponse> {
        const response = await this.uploadFileRaw({ petId: petId, additionalMetadata: additionalMetadata, file: file });
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum FindPetsByStatusStatusEnum {
    Available = 'available',
    Pending = 'pending',
    Sold = 'sold'
}