栅极与漏极均接在 $V_X$，因此 $V_{GS}=V_{DS}=V_X$；器件只要导通就处于饱和区。取 $\lambda=0$、$V_{TH}=0.7\,\mathrm V$，

$$C_1\dot V_X=-\frac{\beta}{2}(V_X-0.7\,\mathrm V)^2.$$

令 $T=2C_1/[\beta(2.3\,\mathrm V)]$，则

$$V_X=0.7\,\mathrm V+\frac{2.3\,\mathrm V}{1+t/T},\qquad I_X=\frac{(2.645\,\mathrm V^2)\beta}{(1+t/T)^2}.$$

所以 $V_X$ 按 $1/t$ 趋近 0.7 V，$I_X$ 按 $1/t^2$ 趋近零，均比 RC 指数慢。0.7 V 终值只属于理想强反型模型；亚阈值和漏电不在题给模型内。

![答案曲线：voltage](/q/R024/solution-voltage.zh.svg)

![答案曲线：current](/q/R024/solution-current.zh.svg)
