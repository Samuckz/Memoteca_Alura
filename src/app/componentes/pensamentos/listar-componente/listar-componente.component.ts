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

  constructor(private service: PensamentoServiceService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    });
  }

}
