<template>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">

        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">

            <!-- Sidebar user panel (optional) -->
            <!--<div class="user-panel">
                <div class="pull-left image">
                    <img :src="avatar" class="img-circle" alt="User Image">
                </div>
                <div class="pull-left info">
                    <p>Search</p>
                    &lt;!&ndash; Status &ndash;&gt;
                    <a href="#"><i class="fa fa-circle text-success"></i> 在线</a>
                </div>
            </div>-->

            <!-- search form (Optional) -->
            <form action="#" method="get" class="sidebar-form">
                <div class="input-group">
                    <!-- <input type="text" name="q" class="form-control" placeholder=""> -->
                    <span class="input-group-btn">
              <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
              </button>
            </span>
                </div>
            </form>
            <!-- /.search form -->

            <!-- Sidebar Menu -->
            <ul class="sidebar-menu" data-widget="tree">
                <li class="header"></li>
                <!-- Optionally, you can add icons to the links -->
                <router-link tag="li" to="/">
                    <a><i class="fa fa-dashboard"></i> <span>Dashboard</span></a>
                </router-link>
                <router-link tag="li" to="/liveview">
                    <a><i class="fa fa-map"></i> <span>Live View</span></a>
                </router-link>
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-head"></i> <span>Employees</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <router-link tag="li" to="/login"><a>Directory</a></router-link>
                        <router-link tag="li" to="/profile"><a>My Profile</a></router-link>
                    </ul>
                    <router-link tag="li" to="/docs">
                
                </router-link>
                </li>
                 <li class="treeview">
                    <a href="#">
                        <i class="fa fa-tablet"></i> <span>Assets</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <router-link tag="li" to="/hardware"><a>Hardware</a></router-link>
                        <router-link tag="li" to="/consumables"><a>Consumables</a></router-link>
                    </ul>
                    <router-link tag="li" to="/docs">
                </router-link>
                </li>
                   <router-link tag="li" to="/documents">
                    <a><i class="fa fa-documents"></i> <span>Documents</span></a>
                </router-link>
                <router-link tag="li" to="/logs">
                    <a><i class="fa fa-logs"></i> <span>Logs</span></a>
                </router-link>
            </ul>
            <!-- /.sidebar-menu -->
        </section>
        <!-- /.sidebar -->
    </aside>
</template>

<script>
    export default {
        name: 'MainSidebar',
        data(){
            return {
                // avatar: require('admin-lte/dist/img/avatar5.png')
            }
        }
    }
</script>