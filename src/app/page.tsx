
import { Hero } from '@/app/components/Hero';
import { Profile } from '@/app/components/Profile';
import { GroupLessons } from '@/app/components/GroupLessons';
import { YomogiMushi } from '@/app/components/YomogiMushi';
import { Pilates } from '@/app/components/Pilates';
import { Corporate } from '@/app/components/Corporate';
import { Online } from '@/app/components/Online';
import { Blog } from '@/app/components/Blog';
import { Contact } from '@/app/components/Contact';
import { InstructorTraining } from '@/app/components/InstructorTraining';

export const metadata = {
  title: 'マユヨガ｜高崎ヨガ教室',
  // description: 'ここにGoogle検索のタイトルの下に表示される説明文（ディスクリプション）を書く。',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <GroupLessons />
      <Pilates />
      <InstructorTraining />
      <Corporate />
      <Online />
      {/* <Blog /> */}
      <YomogiMushi />
      <Contact />
    </>
  );
}