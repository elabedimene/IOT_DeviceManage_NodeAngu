import { Routes } from '@angular/router';
import { AssetComponent } from './asset/asset.component';
import { AssetdevicesComponent } from './assetdevices/assetdevices.component';

export const AssetRoutes: Routes = [
  {
    path: '',
    component: AssetComponent,
     data: {
      //title: 'Assets',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Assets' }
      ]
    }  
  },

  
  { path: ':id', component: AssetdevicesComponent,
  data: {
    //title: 'Assets',
    urls: [
      { title: 'Dashboard', url: '/dashboard' },{ title: 'Asset', url: '/dashboard' },
      { title: 'Devices'  }
    ]
  }  
}
];
