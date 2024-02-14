import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos';
import { PensamentoServiceService } from 'backend/componentes/pensamentos/pensamento-service.service';

@Component({
  selector: 'app-listar-componente',
  templateUrl: './listar-componente.component.html',
  styleUrls: ['./listar-componente.component.css']
})
export class ListarComponenteComponent implements OnInit {

  listaPensamentos: Pensamento[] = []
  paginaAtual: number = 1
  haMaisPensamentos: boolean = true

  constructor(private service: PensamentoServiceService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    });
  }

  carregarMaisPensamentos(){
    this.service.listar(++this.paginaAtual)
      .subscribe(listaPensamentos => {
          this.listaPensamentos.push(...listaPensamentos);
          if(!this.listaPensamentos.length){
            this.haMaisPensamentos = false
          }
      })
  }

}
