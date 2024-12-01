import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { environment } from '../../../environments/environment';
import { User } from '../../types/user';
import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;
  let httpTestingController: HttpTestingController;
  const URI = environment.apiUrl;
  const userReq: User = {
    firstName: 'Luis',
    lastName: 'Veras',
    email: 'luis.veras@gmail.com',
    cellPhoneNumber: '(343) 435-3454',
    address: '1234 Main St, Orlando, FL 33542',
    mailingAddress: '1234 Main St, Orlando, FL 33542',
    ssn: '123-45-5678',
    dateOfBirth: '1999-01-01T00:00:00.000Z',
    medicareBeneficiaryIdentifiers: '1EG4-TE5-MK73',
    documents: []
  };
  const userRes: User = {
    _id: '674bdfca3c42f8f6be12e5c9',
    ...userReq
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        UserService
      ]
    });

    userService = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
  
  it('creates User service', () => {
    expect(userService).toBeTruthy();
  });
  
  describe('getUserById', () => {
    it('gets a user by its id', () => {
      const ID = '674bdfca3c42f8f6be12e5c9';
      let user!: User;
      userService.getUserById(ID).subscribe((res) => user = res);

      const req = httpTestingController.expectOne(URI + 'user/' + ID);
      req.flush(userRes);
      expect(user).toEqual(userRes);
    });
  });
  
  describe('create', () => {
    it('creates a user', () => {
      let user!: User;
      userService.create(userRes).subscribe((res) => user = res);

      const req = httpTestingController.expectOne(URI + 'user/');
      req.flush(userRes);
      expect(user).toEqual(userRes);
    });
  });

  describe('update', () => {
    it('updates a user', () => {
      const ID = '674bdfca3c42f8f6be12e5c9';
      let user!: User;
      const userUpdateRes = {
        ...userRes,
        firstName: 'Alex'
      };
      userService.update(userUpdateRes).subscribe((res) => user = res);

      const req = httpTestingController.expectOne(URI + 'user/'+ ID);
      req.flush(userUpdateRes);
      expect(user.firstName).toEqual('Alex');
    });
  });

  describe('delete', () => {
    it('deletes a user', () => {
      const ID = '674bdfca3c42f8f6be12e5c9';
      let deleteResponse!: { message: string };

      userService.delete(ID).subscribe((res) => deleteResponse = res);

      const req = httpTestingController.expectOne(URI + 'user/'+ ID);
      req.flush({ message: 'User Deleted' });
      expect(deleteResponse).toEqual({ message: 'User Deleted' });
    });
  });
});
