<template>
  <v-container>
    <v-expansion-panel>
        <v-expansion-panel-content>
          <template v-slot:header>
            <div class="grey--text headline text-xs-center pa-4 text-uppercase">Todolist - Fonctionnalités principales</div>
          </template>
          <v-card>
            <v-card-text>
              <v-list class="grey--text text--darken-2">
                <v-list-tile>
                  <v-icon class="mr-3">check</v-icon>
                  Ajout et suppression de tag #important et #later
                </v-list-tile>
                <v-list-tile>
                  <v-icon class="mr-3">sms</v-icon>
                  Saisie des tags lors de l'écriture de la tâche
                </v-list-tile>
                <v-list-tile>
                  <v-icon class="mr-3">edit</v-icon>
                  Edition d'une tâche en double-cliquant sur son contenu
                </v-list-tile>
                <v-list-tile>
                  <v-icon class="mr-3">delete</v-icon>
                  Suppression de toutes les tâches finies
                </v-list-tile>
                <v-list-tile>
                  <v-icon class="mr-3">toggle_off</v-icon>
                  Panneau de filtres avec compteur de tâches
                </v-list-tile>
              </v-list>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
  </v-container>
</template>

<script>
export default {
  components: {

  }
}
</script>
