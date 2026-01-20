import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card,CardAction,CardContent,CardDescription,CardFooter,CardHeader,CardTitle, } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Plus, List, Check, BadgeAlert, SquarePen, Trash, ListChecks, Sigma } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,AlertDialogAction,AlertDialogCancel,
  AlertDialogContent,AlertDialogDescription,AlertDialogFooter,
  AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger,} from "@/components/ui/alert-dialog";
import {
  Dialog, DialogContent,DialogDescription,
  DialogHeader,DialogTitle,DialogTrigger, } from "@/components/ui/dialog";

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg">
        <CardHeader className="flex gap-2">
          <Input placeholder="Adicionar Tarefa"/>         
          <Button className="cursor-pointer font-bold"><Plus/>Cadastrar</Button>
        </CardHeader>
        <CardContent>
          <Separator className="mb-5"/>
          <div className="flex gap-2">
            <Badge className="cursor-pointer"><List/>Todas</Badge>
            <Badge className="cursor-pointer" variant={"outline"}><BadgeAlert/>Não Finalizado</Badge>
            <Badge className="cursor-pointer" variant={"outline"}><Check/>Concluído</Badge>
          </div>

          <div className="mt-4 border-b-1 mb-5">
            <div className="h-12 flex justify-between items-center border-t-1">
              <div className="w-1.5 h-full bg-blue-600"></div>
              <p className="flex-1 px-2 text-sm">Estudar React</p>
              <div className="flex items-center gap-3">
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <SquarePen size={22} className="cursor-pointer"/>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Editar Tarefa</DialogTitle>
                      </DialogHeader>
                      <div className="flex gap-2">
                        <Input placeholder="Editar Tarefa"/>
                        <Button className="cursor-pointer">Editar</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
          </div>
                <Trash size={22} className="cursor-pointer"/>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <ListChecks size={15}/>
              <p className="text-sm">Tarefas Concluídas (3/3)</p>
            </div>
            <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="items-center justify-center text-xs h-8 cursor-pointer" variant={"outline"}><Trash/>Limpar Tarefas Concluídas</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Tem certeza que deseja excluir x itens?</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>Sim</AlertDialogAction>
                <AlertDialogCancel>Não</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          </div>
          
          <div className="bg-gray-200 h-2 w-full rounded-xl mt-5">
            <div className="bg-purple-700 h-full rounded-xl" style={{ width: '50%' }}></div>
          </div>

          <div className="flex justify-end items-center gap-1 mt-2">
            <Sigma size={18}/>
            <p className="text-xs">3 Tarefas no Total</p>
          </div>

          
        </CardContent>
      </Card>
    </main>
  )
}

export default Home;