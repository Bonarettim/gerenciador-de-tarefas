import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService ,TarefaConcluidaDirective } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefasComponent } from './cadastrar';
import { EditarTarefasComponent } from './editar';

@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefasComponent,
    EditarTarefasComponent,
    TarefaConcluidaDirective
  ],
  providers: [
    TarefaService
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class TarefasModule { }
