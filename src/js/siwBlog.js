/**
 * Created by Gillyd on 10/22/2015.
 */
import summary from './summary/summary.m';
import author from './author/author.m';
import tag from './tag/tag.m';
import category from './category/category.m';
import comment from './comment/comment.m';
import media from './media/media.m';

export default angular.module('siwBlog', [
    'siwBlog.summary',
    'siwBlog.author',
    'siwBlog.tag',
    'siwBlog.comment',
    'siwBlog.media',
    'siwBlog.category'
]).value('siwBlog.config', {
        environment: 'development',
        api_port: '1337',
        api_url: 'http://localhost'
    })
    .config(['$locationProvider', ($locationProvider) => {
        $locationProvider.html5Mode(true);
    }])
    .config(['$compileProvider', ($compileProvider) => {
        $compileProvider.debugInfoEnabled(false);
    }]);
