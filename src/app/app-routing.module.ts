import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

// const routes: Routes = [
//   // {path:'',redirectTo:'login',pathMatch:'full'},
//   {path:'',redirectTo:'login',pathMatch:'full'},
//   { path: 'home', component: HomeComponent  },
//   { path: 'dashboard', component: DashboardComponent  },
//   { path: 'login', component: LoginComponent  },
//   { path: 'profileview', component: ProfileViewComponent  },
//   { path: 'labinterface', component: LabinterfaceComponent  },
//   { path: 'updateresult', component: UpdateResultComponent  },
//   { path: 'sampleupdateresult', component: SampleUpdateResultComponent  },
//   {path: '**', component: PageNotFoundComponent},

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
