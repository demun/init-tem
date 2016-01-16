# init-tem

grunt-init 을 사용하기위한 템플릿

`grunt` 를 모르시는분은 [grunt 가이드 문서](https://github.com/demun/demun.github.com/wiki/01_00_grunt_guide) 를 참고하시기 바랍니다.

그런트 템플릿을 사용하려면 [nodejs](https://nodejs.org) 를 설치하고 명령창에서 [grunt-cli](http://gruntjs.com/getting-started#installing-the-cli) 를 설치해야 합니다.



## 사용법

- 1.전역으로 `grunt-init` 을 설치한다.

```shell
npm install -g grunt-init
```



- 2.템플릿을 설치한다.


```shell
git clone git@github.com:demun/grunt-init-test.git ~/.grunt-init/init-tem
```




- 3.템플릿 프로젝트 시작

작업하고자 하는 폴더를 만들고 그 폴더에서 콘솔을 열고 아래 명령어를 칩니다.


```shell
grunt-init init-tem
```

템플릿 기본 파일 및 폴더가 설치됩니다.




- 4. 그런트 모듈 설치

이 예제의 모듈을 한번에 설치할 수 있습니다.

아래의 명령어로 플러그인을 설치합니다.


```javascript
npm install
```


- 5. 그런트 사용

설치가 끝났으니 다음의 명령으로 템플릿을 사용할 수 있습니다.


그런트 기본 빌드

```javascript
grunt
```

실시간 동기화

```javascript
grunt serve
```
