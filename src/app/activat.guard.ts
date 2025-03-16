import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const activatGuard: CanActivateFn = (route, state) => {
 
  const router = inject(Router);

  const loggedUSer = localStorage.getItem('authToken');

  if(loggedUSer != null) {
    return true;
  }else{
    router.navigate(['register']);
    return false;
  }

};
