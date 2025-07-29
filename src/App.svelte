<!-- src/App.svelte -->
<script>
  import { Router, Route } from 'svelte-routing';
  import Header from './layouts/Header.svelte';
  import Navbar from './layouts/Navbar.svelte';
  import Breadcomb from './layouts/Breadcomb.svelte';
  import Footer from './layouts/Footer.svelte';

  // Pages
  import Dashboard from './pages/Dashboard.svelte';
  import NotFound from './pages/NotFound.svelte';
</script>

<div class="main-wrapper">
  <Header />
  <div class="app-body d-flex">
    <Navbar />
    <Breadcomb />
    <div class="main-content p-3" style="flex-grow: 1;">
      <Router>
        <Route path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route default component={NotFound} />
      </Router>
    </div>
  </div>
  <Footer />
</div>

<style>
 .main-wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .app-body {
    flex-grow: 1;
  }
  .main-content {
    overflow-y: auto;
    width: 100%;
  }
</style>
