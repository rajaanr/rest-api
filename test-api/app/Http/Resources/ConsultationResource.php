<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ConsultationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return  [
            'consultations' => [
            'id' => $this->id,
            'status' => $this->status,
            'disease_history' => $this->disease_history,
            'current_symptomps' => $this->current_symptomps,
            'doctor_notes' => $this->doctor_notes,
            'doctor' => $this->doctor
            ]
        ];
    }
}
