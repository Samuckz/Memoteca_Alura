import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos';
import { PensamentoServiceService } from 'backend/componentes/pensamentos/pensamento-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: "",
    autoria: "",
    modelo: ""
  }

  constructor(
    private service: PensamentoServiceService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.service.getPensamentoByID(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    });
  }

  editarPensamento(){
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(["/listarPensamento"])
    })
  }

  cancelarPensamento(){
    this.router.navigate(["/listarPensamento"])
  }

}
