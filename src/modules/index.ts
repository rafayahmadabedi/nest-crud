import { KpisModule } from './kpis/kpis.module';
import { UsersModule } from './users/users.module';
import { TagModule } from './tag/tag.module';
import { ResourcesModule } from './resources/resources.module';
import { ResourceTagModule } from './resource-tag/resource-tag.module';

export const FeatureModules = [
  KpisModule,
  UsersModule,
  TagModule,
  ResourcesModule,
  ResourceTagModule,
];
