import angular from 'angular';

import blocks from 'blocks';
import core from 'core';
import auth from 'auth';
import home from 'home';

angular.module('app', [core, blocks, auth, home]);
