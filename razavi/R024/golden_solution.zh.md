栅极与漏极均接在 $V_X$，因此 $V_{GS}=V_{DS}=V_X$；器件只要导通就处于饱和区。取 $\lambda=0$、$V_{TH}=0.7\,\mathrm V$，

$$C_1\dot V_X=-\frac{\beta}{2}(V_X-0.7\,\mathrm V)^2.$$

令 $T=2C_1/[\beta(2.3\,\mathrm V)]$，则

$$V_X=0.7\,\mathrm V+\frac{2.3\,\mathrm V}{1+t/T},\qquad I_X=\frac{(2.645\,\mathrm V^2)\beta}{(1+t/T)^2}.$$

所以 $V_X$ 按 $1/t$ 趋近 0.7 V，$I_X$ 按 $1/t^2$ 趋近零，均比 RC 指数慢。0.7 V 终值只属于理想强反型模型；亚阈值和漏电不在题给模型内。

![答案曲线：voltage](/q/R024/solution-voltage.zh.svg)

![答案曲线：current](/q/R024/solution-current.zh.svg)

## 评分说明

+2：识别二极管连接的器件处于饱和区，正确画出 $V_X$ 和 $I_X$ 随时间双曲线式衰减的两张带单位曲线，并给出初始电流和理想模型下的终值。

+1：曲线形状正确，但遗漏衰减慢于指数的特征，或少画一个所求量。

−2：断言器件进入线性区，或断言理想平方律模型下 $V_X\to0$。
