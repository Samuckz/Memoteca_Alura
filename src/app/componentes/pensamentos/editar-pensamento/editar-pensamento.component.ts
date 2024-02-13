import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos';
import { PensamentoServiceService } from 'backend/componentes/pensamentos/pensamento-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  formulario!: FormGroup;

  constructor(
    private service: PensamentoServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get("id");
    this.service.getPensamentoByID(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    });

    this.formulario = this.formBuilder.group({
      conteudo: [this.pensamento.conteudo, Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria: [this.pensamento.autoria, Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      modelo: [this.pensamento.modelo]
  })
  }

  editarPensamento(){
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(["/listarPensamento"])
    })
  }

  cancelarPensamento(){
    this.router.navigate(["/listarPensamento"])
  }

  habilitarBotao(): string{
    if(this.formulario.valid){
      return 'botao'
    } else{
      return 'botao__desabilitado'
    }
  }

}
