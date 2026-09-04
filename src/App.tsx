import { AppStateProvider, useAppState } from './state/AppStateContext'
import { CheeseCollectionsProvider } from './state/CheeseCollectionsContext'
import { PhoneFrame } from './components/layout/PhoneFrame'
import { HamburgerButton } from './components/layout/HamburgerButton'
import { TabBar } from './components/layout/TabBar'
import { HomeScreen } from './components/screens/HomeScreen'
import { MapScreen } from './components/screens/MapScreen'
import { SearchScreen } from './components/screens/SearchScreen'
import { FavoritesScreen } from './components/screens/FavoritesScreen'
import { CheeseDetailScreen } from './components/screens/CheeseDetailScreen'
import { AccordsScreen } from './components/screens/AccordsScreen'
import { DecoupeScreen } from './components/screens/DecoupeScreen'
import { CalendarScreen } from './components/screens/CalendarScreen'
import { AppellationsScreen } from './components/screens/AppellationsScreen'
import { EncyclopediaScreen } from './components/screens/EncyclopediaScreen'
import { ImportExportScreen } from './components/screens/ImportExportScreen'
import { Drawer } from './components/screens/Drawer'
import { AboutScreen } from './components/screens/AboutScreen'
import { LegalScreen } from './components/legal/LegalScreen'
import { FirstLaunchNotice } from './components/legal/FirstLaunchNotice'
import { FavoritesSheet } from './components/screens/FavoritesSheet'
import { UpdateNotice } from './components/ui/UpdateNotice'

function TabContent() {
  const { state } = useAppState()
  if (state.selected) return null
  switch (state.tab) {
    case 'home':
      return <HomeScreen />
    case 'carte':
      return <MapScreen />
    case 'recherche':
      return <SearchScreen />
    case 'favoris':
      return <FavoritesScreen />
  }
}

function AppShell() {
  const { state, actions } = useAppState()

  return (
    <PhoneFrame>
      <HamburgerButton onClick={actions.openMenu} />

      <div className="mainscroll" style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
        <TabContent />
      </div>

      <TabBar active={state.tab} onSelect={actions.selectTabFromDrawer} />

      {state.selected && <CheeseDetailScreen />}
      {state.accords && <AccordsScreen />}
      {state.decoupe && <DecoupeScreen />}
      {state.calendrier && <CalendarScreen />}
      {state.appel && <AppellationsScreen />}
      {state.encyclo && <EncyclopediaScreen />}
      {state.importExport && <ImportExportScreen />}
      {state.legal && <LegalScreen />}
      {state.about && <AboutScreen />}
      {state.menuOpen && <Drawer />}
      <FavoritesSheet />
      <UpdateNotice />
      <FirstLaunchNotice />
    </PhoneFrame>
  )
}

function App() {
  return (
    <AppStateProvider>
      <CheeseCollectionsProvider>
        <AppShell />
      </CheeseCollectionsProvider>
    </AppStateProvider>
  )
}

export default App
