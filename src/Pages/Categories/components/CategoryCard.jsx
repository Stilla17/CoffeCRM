import React from 'react'
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { Pencil, Star, Trash2 } from "lucide-react";
import Button from '../../../components/Button/Button';
import { Badge } from '@/components/ui/badge';

export const CategoryCard = ({name}) => {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
              <Star className="w-6 h-6 text-yellow-500" />
            </div>

            <div>
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-sm text-muted-foreground">Yaxshi bola</p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Pencil className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Trash2 className="w-4 h-4 text-red-500" />
            </Button>
          </div>
        </div>

        <div className="my-4 h-px bg-border" />

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">2 products</p>

          <Badge
            variant="outline"
            className="bg-green-800 text-white dark:bg-green-600"
          >
            Active
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
