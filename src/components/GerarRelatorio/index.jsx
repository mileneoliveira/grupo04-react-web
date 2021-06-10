import moment from "moment";
import { useAuth } from "hooks/useAuth";
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { notificationError, notificationSuccess } from "utils/notifications";


const GerarRelatorio = () => {

  const { user } = useAuth();
  const [date, setDate] = useState('');
  const dateNow = moment().format("YYYY-MM-DD");
  const [values, setValues] = useState([]);

  const handleDate = (evt) => {
        const { value } = evt.target;
        const dateFormater = value.toString();
        setDate(dateFormater);
        console.log(dateFormater);
    }

    function onSubmit(ev) {
      ev.preventDefault();

      const test = date ? date : dateNow

      const resposta = api.get('gerarArquivo/download', {
  
          responseType: 'blob',
              params: {
                  data: test,
                  idUsuario: `${user.id}`
              }
      }).then((response) => {
        if(response.status == 200){
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'relatorio.csv'); //or any other extension
          document.body.appendChild(link);
          link.click();
          notificationSuccess("Sucesso", "O download começará em instantes!");
        }
       
      })
      .catch((err) => {
        notificationError("Erro", "Não foi possivel localizar as informações!");
      })
  }
  return(
    <div className="divChart">
       
            <form className="form-data-relatorio" onSubmit={onSubmit}>
                <input id="date" type="date" defaultValue={dateNow} onChange={handleDate} />
                <button>Download</button>
            </form>
           
            </div>
  )
}

export default GerarRelatorio;