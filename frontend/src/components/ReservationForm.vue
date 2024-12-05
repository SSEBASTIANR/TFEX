<template>
  <div class="reservation-form">
    <h2>Formulario de Reserva</h2>
    <form @submit.prevent="submitReservation">
      <div>
        <label for="name">Nombre:</label>
        <input type="text" v-model="reservationData.name" id="name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="reservationData.email" id="email" required>
      </div>
      <div>
        <label for="date">Fecha de Reserva:</label>
        <input type="date" v-model="reservationData.date" id="date" required>
      </div>
      <button type="submit">Reservar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reservationData: {
        name: '',
        email: '',
        date: ''
      }
    }
  },
  methods: {
    submitReservation() {
      // Aquí se manejará el envío del formulario (se integrará con Django)
      console.log("Reserva enviada:", this.reservationData);
    }
  }
}
</script>

<style scoped>
.reservation-form {
  max-width: 400px;
  margin: auto;
}
/* Agrega más estilos según sea necesario */
</style>