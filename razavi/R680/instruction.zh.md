某长沟道 MOSFET 模型考虑了阈值电压（threshold voltage）沿沟道的变化，它给出的漏极电流（未进入饱和时）为
$$I_D = \mu C_{ox}\frac{W}{L}\left\{(V_{GS}-V_{TH0})V_{DS} - \frac{V_{DS}^2}{2} - \frac23\gamma\left[(V_{DS} - V_{BS} + 2\phi_F)^{3/2} - (-V_{BS} + 2\phi_F)^{3/2}\right]\right\}.$$
利用该式计算体跨导（body transconductance）$g_{mb} = \partial I_D/\partial V_{BS}$。将结果与简单平方律（square law）模型的结果进行比较；在简单模型中，阈值电压沿整个沟道都相同，$V_{TH} = V_{TH0} + \gamma\left(\sqrt{2\phi_F + V_{SB}} - \sqrt{2\phi_F}\right)$。
