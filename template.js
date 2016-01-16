/*
 * grunt-template
 * https://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

// 기본 템플릿에 대한 설명입니다.
exports.description = '프로젝트를 시작하기위한 그런트 기본 템플릿.';

// 템플릿 관련 메모 질문 프롬프트 전에 표시합니다.
exports.notes = '그런트로 프로젝트를 시작하기 위한 기본 템플릿입니다. ' + '\\n' +
  '기본적인 파일과 폴더를 포함하고 있으며, ' +
  '그런트 관련 설정파일이 포함되어 있습니다. ';

// 템플릿 관련 메모 질문 프롬프트 후 표시합니다.
exports.after = '이제 npm install 로 프로젝트에 필요한 플러그인을 설치해야합니다. ' + '\\n' +
  '설치후, 당신은 그런트 프로젝트 작업을 할 수 있습니다. ' + '\\n' +
  'grunt-init 템플릿의 사용방법은 README.md 를 참고하세요. ' + '\\n' +
  '그런트 설치 및 구성하는 방법에 대한 자세한 내용은 시작 설명서를 참조하십시오. ' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

// 기존 파일이나 디렉토리 매칭은 와일드 카드 경고의 원인이 됩니다.
exports.warnOn = '*';

// 실제 init 템플릿 시작.
exports.template = function(grunt, init, done) {
  // 첫 인자 grunt는 grunt의 모든 메서드와 라이브러리를 가진 참조 객체고,
  // init 인자는 현재 init 템플릿에서 지정한 프로퍼티와 메서드를 가진 객체며,
  // done 인자는 init 템플릿 실행을 끝내고 호출할 콜백 함수다.

  // 입력 프롬프트 프로세스를 시작한다.
  init.process({type: 'grunt'}, [
    // 이 값에 대한 프롬프트.
    // 입력값을 위한 사용자 프롬프트
    init.prompt('name', function(value, props, done) {
      // 기본적으로 이름앞에 grunt- 를 추가.
      var name = value;
      // Replace 'grunt-contrib' with 'grunt' and give a warning
      var contribRe = /^grunt-contrib/;
      if (contribRe.test(name)) {
        grunt.log.writelns((
          'Removing "contrib" from your project\'s name. The grunt-contrib ' +
          'namespace is reserved for tasks maintained by the grunt team.'
        ).red);
        name = name.replace(contribRe, 'grunt');
      }
      done(null, name);
    }),
    init.prompt('description', '프로젝트를 위한 그런트 기본 템플릿.'),
    init.prompt('version'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('bugs'),
    init.prompt('licenses', 'MIT'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url', 'http://demun.tistory.com'),
    init.prompt('grunt_version'),
    init.prompt('node_version', grunt.package.engines.node)
    // init.prompt('jquery_version')
  ], function(err, props) {
    // grunt-plugin-specific 속성을 설정합니다.
    props.short_name = props.name.replace(/^grunt[\-_]?/, '').replace(/[\W_]+/g, '_').replace(/^(\d)/, '_$1');
    // props.npm_test = 'grunt test';
    // props.keywords = ['gruntplugin'];
    props.devDependencies = {
        "grunt": "~0.4.5",
        "grunt-autoprefixer": "~3.0.3",
        "grunt-concurrent": "~2.1.0",
        "grunt-contrib-clean": "~0.7.0",
        "grunt-contrib-copy": "~0.8.2",
        "grunt-contrib-concat": "~0.5.1",
        "grunt-contrib-connect": "~0.11.2",
        "grunt-contrib-csslint": "~0.5.0",
        "grunt-contrib-cssmin": "~0.14.0",
        "grunt-contrib-imagemin": "~1.0.0",
        "grunt-contrib-jshint": "~0.11.3",
        "grunt-contrib-less": "~1.1.0",
        "grunt-contrib-uglify": "~0.11.0",
        "grunt-contrib-watch": "~0.6.1",
        "grunt-csscomb": "~3.1.0",
        "grunt-htmlhint": "~0.9.12-fix",
        "grunt-includes": "~0.5.3",
        "grunt-newer": "~1.1.1",
        "jshint-stylish": "~2.1.0",
        "load-grunt-tasks": "~3.4.0",
        "time-grunt": "~1.3.0"
    };
    props.peerDependencies = {
      'grunt': props.grunt_version,
    };
    // 복사할 파일 목록을 담고 있는 객체를 반환한다
    var files = init.filesToCopy(props);

    // 적절한 이름의 라이센스 파일을 추가한다.
    init.addLicenseFiles(files, props.licenses);

    // 인자로 전달한 객체의 모든 파일(files)을 순회하면서 대상 파일을
    // {% %} 템플릿으로 처리해서 목적지에 복사한다.
    // init.copyAndProcess(files, props, {noProcess: 'app/**'});
    init.copyAndProcess(files, props);

    // package.json 파일을 생성한다.
    // 목적지 폴더에 package.json 파일을 저장한다.
    init.writePackageJSON('package.json', props);

    // All done!
    done();
  });

};
