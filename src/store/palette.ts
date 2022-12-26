import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

@Module({
  name: 'palette',
  stateFactory: true,
  namespaced: true,
})
class Palette extends VuexModule {
  visible = false;

  @Mutation
  toggleVisibility(value?: boolean) {
    this.visible = value !== undefined ? value : !this.visible;
  }
}

export default Palette;
