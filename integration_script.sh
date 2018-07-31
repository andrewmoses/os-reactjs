npm run build
cd ..
export LD_LIBRARY_PATH=/opt/rh/httpd24/root/usr/lib64
git clone https://github.com/andrewmoses/os-sample-python.git
cp src/build/static/js/main.*.js os-sample-python/static/js/main.js
cd os-sample-python
git add -A
git config --global user.email "andrew2moses@gmail.com"
git config --global user.name "Pod of openshift Andrew"
git commit -m "auto build commit from openshift pod"
git push --repo https://$GITHUB_USERNAME:$GITHUB_PASSWORD@github.com/andrewmoses/os-sample-python.git