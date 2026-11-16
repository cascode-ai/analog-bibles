$$g_{mb} = \mu C_{ox}\frac{W}{L}\,\gamma\left[\sqrt{2\phi_F - V_{BS} + V_{DS}} - \sqrt{2\phi_F - V_{BS}}\right] = \mu C_{ox}\frac{W}{L}\,\gamma\left[\sqrt{2\phi_F + V_{DB}} - \sqrt{2\phi_F + V_{SB}}\right].$$
- 求导：$-\tfrac23\gamma[(V_{DS}-V_{BS}+2\phi_F)^{3/2} - (2\phi_F - V_{BS})^{3/2}]$ 的导数 $\partial/\partial V_{BS}$ 为 $\gamma[(V_{DS}-V_{BS}+2\phi_F)^{1/2} - (2\phi_F-V_{BS})^{1/2}] > 0$。

与简单模型的比较：
- 简单模型，线性区（triode region）：由 $I_D = \mu C_{ox}(W/L)[(V_{GS}-V_{TH})V_{DS} - V_{DS}^2/2]$ 得 $g_{mb} = \mu C_{ox}\dfrac{W}{L}V_{DS}\,\dfrac{\gamma}{2\sqrt{2\phi_F+V_{SB}}}$。
- 简单模型，饱和区：$g_{mb} = \eta g_m$，其中 $\eta = \gamma/(2\sqrt{2\phi_F+V_{SB}})$，$g_m = \mu C_{ox}(W/L)(V_{GS}-V_{TH})$。
- 新结果可以写成 $\mu C_{ox}(W/L)\int_{V_{SB}}^{V_{SB}+V_{DS}} \dfrac{\gamma\,du}{2\sqrt{2\phi_F+u}}$。它是局部体效应系数（body-effect coefficient）从源端到漏端沿沟道的平均。简单模型则对整个沟道都使用源端的值 $\gamma/(2\sqrt{2\phi_F+V_{SB}})$。
- $V_{DS}$ 较小（$V_{DS} \ll 2\phi_F + V_{SB}$）：对平方根作一阶展开，恰好得到简单模型的结果。
- $V_{DS}$ 较大：平方根函数是向下凹的（concave），因此新的 $g_{mb}$ 较小。沟道对衬底的电压向漏端逐渐升高，那里的阈值对 $V_{BS}$ 不那么敏感。比值 $g_{mb}/g_m$（这里 $g_m = \mu C_{ox}(W/L)V_{DS}$）等于 $\gamma[\sqrt{2\phi_F+V_{SB}+V_{DS}} - \sqrt{2\phi_F+V_{SB}}]/V_{DS}$，它最大为 η。
- 示例，$2\phi_F$ = 0.9 V：当 $V_{SB} = 0$ 时，$V_{DS}$ = 0.2、0.5、1 V 分别给出简单模型值的 0.95、0.89、0.82；当 $V_{SB}$ = 1 V 时，分别为 0.975、0.94、0.89。
- 在饱和区，在 $V_{DS} = V_{D,sat}$ 处计算该结果；由于那里 $\partial I_D/\partial V_{DS} = 0$，$V_{D,sat}$ 对 $V_{BS}$ 的依赖不产生贡献。结果同样略低于 $\eta g_m$，当 $V_{D,sat} \ll 2\phi_F + V_{SB}$ 时趋近于它。
