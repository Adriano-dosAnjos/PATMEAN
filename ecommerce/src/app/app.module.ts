import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Template/nav/nav.component';
import { FooterComponent } from './Template/footer/footer.component';
import { MainComponent } from './Template/main/main.component';
import { HomeComponent } from './View/home/home.component';
import { CadastroComponent } from './View/cadastro/cadastro.component';
import { CreateProdutoComponent } from './View/cadastro/produtos/create-produto/create-produto.component';
import { ReadProdutoComponent } from './View/cadastro/produtos/read-produto/read-produto.component';
import { UpdateProdutoComponent } from './View/cadastro/produtos/update-produto/update-produto.component';
import { DeleteProdutoComponent } from './View/cadastro/produtos/delete-produto/delete-produto.component';
import { UpdateUsuarioComponent } from './View/cadastro/usuarios/update-usuario/update-usuario.component';
import { DeleteUsuarioComponent } from './View/cadastro/usuarios/delete-usuario/delete-usuario.component';
import { ReadUsuarioComponent } from './View/cadastro/usuarios/read-usuario/read-usuario.component';
import { CreateUsuarioComponent } from './View/cadastro/usuarios/create-usuario/create-usuario.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    CadastroComponent,
    CreateProdutoComponent,
    ReadProdutoComponent,
    UpdateProdutoComponent,
    DeleteProdutoComponent,
    UpdateUsuarioComponent,
    DeleteUsuarioComponent,
    ReadUsuarioComponent,
    CreateUsuarioComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCardModule,
    MatBottomSheetModule,
    MatRadioModule,
    MatSelectModule,
    MatTabsModule,
    MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
